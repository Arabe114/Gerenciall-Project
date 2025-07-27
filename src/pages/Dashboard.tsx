import { MetricCard } from "@/components/MetricCard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  MessageSquare, 
  Send, 
  BarChart3, 
  TrendingUp, 
  Bot,
  Calendar,
  Bell
} from "lucide-react"

export default function Dashboard() {
  const metrics = [
    {
      title: "Contatos Ativos",
      value: "2,847",
      description: "Total de contatos no sistema",
      icon: Users,
      trend: { value: 12.5, isPositive: true }
    },
    {
      title: "Mensagens Enviadas",
      value: "18,924",
      description: "Este mês",
      icon: MessageSquare,
      trend: { value: 8.2, isPositive: true }
    },
    {
      title: "Taxa de Conversão",
      value: "23.4%",
      description: "Funil de vendas",
      icon: TrendingUp,
      trend: { value: 2.1, isPositive: true }
    },
    {
      title: "Automações Ativas",
      value: "47",
      description: "Bots e fluxos rodando",
      icon: Bot,
      trend: { value: 15.8, isPositive: true }
    }
  ]

  const recentActivities = [
    { type: "message", description: "Nova mensagem de João Silva", time: "2 min" },
    { type: "automation", description: "Fluxo de boas-vindas executado", time: "5 min" },
    { type: "lead", description: "Lead convertido em cliente", time: "15 min" },
    { type: "notification", description: "Notificação agendada enviada", time: "1h" },
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Visão geral das suas operações e métricas do Gerenciall
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Quick Actions */}
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="h-5 w-5 text-blue-light" />
              Ações Rápidas
            </CardTitle>
            <CardDescription>
              Acesse rapidamente as funcionalidades mais usadas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start bg-primary hover:bg-primary/90">
              <MessageSquare className="mr-2 h-4 w-4" />
              Novo Disparo em Massa
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              Agendar Notificação
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Extrair Contatos
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Bot className="mr-2 h-4 w-4" />
              Configurar ChatBot
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-blue-light" />
              Atividades Recentes
            </CardTitle>
            <CardDescription>
              Últimas ações no sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-light rounded-full"></div>
                    <p className="text-sm text-foreground">{activity.description}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart Placeholder */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-light" />
            Performance das Campanhas
          </CardTitle>
          <CardDescription>
            Análise de desempenho dos últimos 30 dias
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-blue-light mx-auto mb-2" />
              <p className="text-muted-foreground">Gráfico de performance será implementado</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}