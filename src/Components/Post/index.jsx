import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export default function Post({texto}) {
  return (
    <main className="principal">
      <div className='container'>
        <div style={{marginTop: "60px", marginBottom: "100px"}}>
          <ReactMarkdown>{texto}</ReactMarkdown>
        </div>
      </div>
    </main>
  )
}
