import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Button } from "@/components/ui/button"
import { Bell, User, LogOut } from "lucide-react"
import { useAuth } from "@/hooks/useAuth"
import { Navigate } from "react-router-dom"
import { toast } from "@/hooks/use-toast"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { user, signOut, loading } = useAuth();

  // Show auth page if not authenticated and not on auth route
  if (!user && !loading && !window.location.pathname.includes('/auth')) {
    return <Navigate to="/auth" replace />;
  }

  // Don't show layout on auth page
  if (window.location.pathname.includes('/auth')) {
    return <>{children}</>;
  }

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: 'Erro',
        description: 'Erro ao fazer logout',
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Sucesso',
        description: 'Logout realizado com sucesso!',
      });
    }
  };

  return (
    <div className="dark">
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-background">
          <AppSidebar />
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <h1 className="text-xl font-semibold text-foreground">
                  Gerenciall
                </h1>
              </div>
              
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" onClick={handleSignOut}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-6 bg-background overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  )
}