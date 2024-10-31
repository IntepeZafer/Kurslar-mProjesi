import { useEffect , useState} from 'react'
import axios from 'axios'
import './App.css'
import Courses from '../public/Companents/Courses/Courses'
import Loading from '../public/Companents/Loading/Loading'

function App() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const deleteCourse = (id) => {
    const afterDeleteCourses = courses.filter((course) => course.id !== id)
    setCourses(afterDeleteCourses)
  }
  const fetchCourses = async () => {
    setLoading(true)
    try{
      const response = await axios.get('http://localhost:3000/courses');
      setCourses(response.data);
      setLoading(false)
    }
    catch(error){
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchCourses();
  } , [])
  return (
    <>
    <div className='App'>
      {loading ? (<Loading/>) : (<Courses courses={courses} removeCourse={deleteCourse}/>)}
    </div>
    </>
  )
}

export default App
