import VisibleTodo from '@/container/visibleTodo'
import AddTodo from '@/container/addTodo'
// import Footer from '@/container/foot'

function Order() {
  return (
    <div>
      <AddTodo></AddTodo>
      <VisibleTodo></VisibleTodo>
      {/* <Footer /> */}
    </div>
  )
}

export default Order