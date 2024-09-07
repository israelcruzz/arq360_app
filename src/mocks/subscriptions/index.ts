export interface ISubscription {
  id: string;
  title: string;
  description: string
}

export const SUBSCRIPTIONS_MOCK: ISubscription[] = [
  {
    id: '1',
    title: 'FREE',
    description: 'Grátis / Projetos Limitados (10)'
  },
  {
    id: '2',
    title: 'PRO',
    description: 'R$20 / Projetos Ilimitados'
  },
]