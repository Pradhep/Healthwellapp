import '../index.css'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import toast from 'react-hot-toast'
import { useState,useEffect } from 'react'

function Dashboard() {

  const [calburnt, setCalburnt] = useState(0);
  const [calintake, setCalintake] = useState(0);
  const [exerciseData, setExerciseData] = useState([]);
  const [foodData, setFoodData] = useState([]);

  const userId = sessionStorage.getItem('loginuserId');
  const getData = async()=>{
    try {
      //let {message,exerciseData,foodData,totalExerciseCalories,totalFoodCalories} = await AxiosService.get(ApiRoutes.Dashboarddata.path,{userId},{authenticate:ApiRoutes.Dashboarddata.auth})
      let { message, exerciseData, foodData, totalExerciseCalories, totalFoodCalories } = await AxiosService.get(`${ApiRoutes.Dashboarddata.path}?userId=${userId}`,{ authenticate: ApiRoutes.Dashboarddata.auth });
      setCalburnt(parseInt(totalExerciseCalories) || 0);
      setCalintake(parseInt(totalFoodCalories) || 0);
      setExerciseData(exerciseData);
      setFoodData(foodData);
      toast.success(message)
    } catch (error) {
      toast.error(error.message || "Internal Server Error")
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <section className="section main-section">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-6">
        <div className="card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div className="widget-label">
                <h3>Calories Burnt</h3>
                <h1>{calburnt}</h1>
              </div>
              <span className="icon widget-icon text-green-500">
                <i className="mdi mdi-account-multiple mdi-48px"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div className="widget-label">
                <h3>Calories Gained</h3>
                <h1>{calintake}</h1>
              </div>
              <span className="icon widget-icon text-blue-500">
                <i className="mdi mdi-cart-outline mdi-48px"></i>
              </span>
            </div>
          </div>
        </div>

        {/* <div className="card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div className="widget-label">
                <h3>Performance</h3>
                <h1>256%</h1>
              </div>
              <span className="icon widget-icon text-red-500">
                <i className="mdi mdi-finance mdi-48px"></i>
              </span>
            </div>
          </div>
        </div> */}
      </div>

      <div className="card mb-6">
        <header className="card-header">
          <p className="card-header-title">
            <span className="icon"><i className="mdi mdi-finance"></i></span>
            Performance
          </p>
          <a href="#" className="card-header-icon">
            <span className="icon"><i className="mdi mdi-reload"></i></span>
          </a>
        </header>
        <div className="card-content">
          <div className="chart-area">
            <div className="h-full">
              <div className="chartjs-size-monitor">
                <div className="chartjs-size-monitor-expand"><div></div></div>
                <div className="chartjs-size-monitor-shrink"><div></div></div>
              </div>
              <canvas
                id="big-line-chart"
                width="250"
                height="250"
                className="chartjs-render-monitor block"
                style={{ height: '400px', width: '1197px' }}
              ></canvas>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="notification blue">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
          <div>
            <span className="icon"><i className="mdi mdi-buffer"></i></span>
            <b>Responsive table</b>
          </div>
          <button
            type="button"
            className="button small textual --jb-notification-dismiss"
          >
            Dismiss
          </button>
        </div>
      </div> */}
 {/*
      <div className="card has-table">
        <header className="card-header">
          <p className="card-header-title">
            <span className="icon"><i className="mdi mdi-account-multiple"></i></span>
            Clients
          </p>
          <a href="#" className="card-header-icon">
            <span className="icon"><i className="mdi mdi-reload"></i></span>
          </a>
        </header>
        <div className="card-content">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Company</th>
                <th>City</th>
                <th>Progress</th>
                <th>Created</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="image-cell">
                  <div className="image">
                    <img
                      src="https://avatars.dicebear.com/v2/initials/rebecca-bauch.svg"
                      className="rounded-full"
                      alt="Rebecca Bauch"
                    />
                  </div>
                </td>
                <td data-label="Name">Rebecca Bauch</td>
                <td data-label="Company">Daugherty-Daniel</td>
                <td data-label="City">South Cory</td>
                <td data-label="Progress" className="progress-cell">
                  <progress max="100" value="79">79</progress>
                </td>
                <td data-label="Created">
                  <small className="text-gray-500" title="Oct 25, 2021">Oct 25, 2021</small>
                </td>
                <td className="actions-cell">
                  <div className="buttons right nowrap">
                    <button
                      className="button small green --jb-modal"
                      data-target="sample-modal-2"
                      type="button"
                    >
                      <span className="icon"><i className="mdi mdi-eye"></i></span>
                    </button>
                    <button
                      className="button small red --jb-modal"
                      data-target="sample-modal"
                      type="button"
                    >
                      <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                    </button>
                  </div>
                </td>
              </tr>

               Add the rest of your rows similarly

            </tbody>
          </table> 
          <div className="table-pagination">
            <div className="flex items-center justify-between">
              <div className="buttons">
                <button type="button" className="button active">1</button>
                <button type="button" className="button">2</button>
                <button type="button" className="button">3</button>
              </div>
              <small>Page 1 of 3</small>
            </div>
          </div>
        </div>
      </div>*/}
    </section>
  );
}

export default Dashboard;
