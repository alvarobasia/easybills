export interface IProps{
  placeholder: string
  title: string
  value: string | number
  setValue: (e: string) => void
  type: string
}