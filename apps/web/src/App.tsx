import deployments from 'contracts/deployments.json'

const App: React.FC = () => {
  return (
    <div>
      <p>hello world</p>
      <pre>
        <code>{JSON.stringify(deployments, null, 4)}</code>
      </pre>
    </div>
  )
}

export default App
