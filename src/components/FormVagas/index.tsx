import { FormEvent, useState } from 'react'
import { Form, Campo, BtnPesquisar } from '../FormVagas/FormVagasStyles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLowerCase())
  }

  return (
    <Form onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTermo(e.target.value)
        }
        type="search"
      />
      <BtnPesquisar type="submit">Pesquisar</BtnPesquisar>
    </Form>
  )
}

export default FormVagas
