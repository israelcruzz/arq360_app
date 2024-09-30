export interface IClient {
  id: string
  name: string
  imageUri: string
}

export const CLIENTS_MOCK: IClient[] = [
  {
    id: '1',
    name: 'Isaac',
    imageUri: 'https://github.com/israelcruzz.png'
  },
  {
    id: '2',
    name: 'Israel',
    imageUri: 'https://github.com/israelcruzz.png'
  }
]