import { useState } from "react"
import Courses from "./Components/Courses/Courses"
import Credit from "./Components/Credit/Credit"
import Header from "./Components/Header/Header"

function App() {
  const [selectCourse, setSelectCourse] = useState([]);
  const [creditRemaining, setCreditRemaining] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectCourse = course => {
    if(selectCourse.includes(course)) {
      alert("You have already selected this course!");
      return;
    }
    const newCourse = [...selectCourse, course];
    const uniqueCourse = newCourse.filter((course, index, self) => self.indexOf(course) === index);
    const newCreditRemaining = creditRemaining - course.credit_hour;
    const newTotalCredit = totalCredit + course.credit_hour;
    const newTotalPrice = (totalPrice + course.price).toFixed(2);
    
    if(newTotalCredit > 20) {
      alert("You Can't take more than 20 Credit!");
    } else if(newCreditRemaining < 0) {
        alert("Your Remaining Credit Can't be less than 0");
    } else {
      setSelectCourse(uniqueCourse);
      setCreditRemaining(newCreditRemaining);
      setTotalCredit(newTotalCredit);
      setTotalPrice(newTotalPrice);
    }
  }

  return (
    <>
      <Header />
      <main className="container mx-auto md:flex gap-6 pb-12">
        <Courses handleSelectCourse={handleSelectCourse} />
        <Credit selectCourse={selectCourse} creditRemaining={creditRemaining} totalCredit={totalCredit} totalPrice={totalPrice} />
      </main>
    </>
  )
}

export default App;
