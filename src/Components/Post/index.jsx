import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export default function Post({texto}) {
  return (
    <main className="principal">
      <div className='container'>
        <ReactMarkdown>{texto}</ReactMarkdown>
      </div>
    </main>
  )
}
