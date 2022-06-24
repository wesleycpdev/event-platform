import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

const CREATE_SUBSCRIBE_MUTATION = gql`
    mutation CreateSubscriber ($name: String!, $email: String!) {
        createSubscriber(data: {name: $name, email: $email}) {
            id
        }
    }
`

export function Subscribe() {
    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBE_MUTATION);

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();

        await createSubscriber({
            variables: {
                name,
                email,
            }
        })

        navigate('/event')
    }

    function handleSubscribed() {
        navigate('/event')
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo />

                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa um <strong className="text-blue-500">mini editor de imagens</strong> do zero com <strong className="text-blue-500">Python e Kivy</strong>
                    </h1>

                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma hora e meia você vai ter a introdução na prática de uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">
                        Inscreva-se gratuitamente
                    </strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input 
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text" 
                            placeholder="Seu nome completo" 
                            onChange={event => setName(event.target.value)}
                        />
                        <input 
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email" 
                            placeholder="Digite seu email" 
                            onChange={event => setEmail(event.target.value)}
                        />

                        <button 
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            Garantir minha vaga
                        </button>

                        <button 
                            type="button"
                            disabled={loading}
                            onClick={handleSubscribed}
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            Já me inscrevi
                        </button>
                    </form>
                </div>
            </div>

            <img src="/src/assets/code-mockup.png" className="mt-10" alt="" />
        </div> 
    )
}