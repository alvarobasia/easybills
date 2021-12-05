export interface IProps{
  placeholder: string
  title: string
  value: string | number
  setValue: (e: string) => void
  removeTag: (item: string) => void
  tags: string[]
}