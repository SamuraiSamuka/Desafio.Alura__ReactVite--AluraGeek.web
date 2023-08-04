import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Post({texto}) {
  return (
    <main className="principal">
      <div className='container'>
        <div style={{marginTop: "30px", marginBottom: "50px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%"}}>
          <ReactMarkdown 
            children={texto} 
            components={{
              h2:({node, ...props}) => <h2 style={{marginBottom: "15px", marginTop: "10px", fontWeight: "bold", fontSize: "34px"}} {...props}/>,
              h3:({node, ...props}) => <h3 style={{marginBottom: "12px", marginTop: "10px", fontWeight: "bold", fontSize: "28px"}} {...props}/>,
              p: ({node, ...props}) => <p style={{marginBottom: "15px", lineHeight: "1.5"}} {...props}></p>
            }}
          />
        </div>
      </div>
    </main>
  );
}
