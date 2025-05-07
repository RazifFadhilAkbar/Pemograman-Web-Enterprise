import './App.css'
import Button from './Button.tsx'
import HelloWorld from './HelloWorld.tsx'
import { UserCard } from './UserCard.tsx'
import { PropHello } from './HelloWord.dto.ts'


function App() {
   const props: PropHello = {
    name:'Razif',
    gender: 'Laki Laki',
    umur: 20

   }
   
  return (
    <>
      <h1>Hello World</h1>
      <h2>Full Stack Developer</h2>
      <h3>This My App</h3>
      <HelloWorld name='Razif' gender='Laki Laki' umur={20}/>
      <UserCard />
      <Button flag='Hello'/>
      <Button flag=''/>

     
    </>
  )
}

export default App