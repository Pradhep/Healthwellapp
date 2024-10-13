import exsmodel from '../models/exercisemodel.js'
import foodmodel from '../models/foodmodel.js';


const getdata = async (req, res) => {
    try {
        const userId = req.query.userId; // Get userId from query parameters
        // // Fetch the data based on the userId
        // let exscaldata = await exsmodel.find({ userId: userId });
        // let foodcaldata = await foodmodel.find({ userId: userId });
  console.log(userId)
      // Fetch exercise data
      let exsdata = await exsmodel.find(
        { userId: userId },
        { exsid: 1, userId: 1, exstitle: 1, exsduration: 1, exscalburned: 1, _id: 0 }
      );
  
      // Fetch food data
      let fooddata = await foodmodel.find(
        { userId: userId },
        { foodid: 1, userId: 1, foodtitle: 1, foodcal: 1, foodmicront: 1, foodmacrnt: 1, _id: 0 }
      );
  
      // Calculate the sum of exscalburned (exercise calories burned)
      const totalExerciseCalories = exsdata.reduce((acc, item) => acc + item.exscalburned, 0);
  
      // Calculate the sum of foodcal (food calories)
      const totalFoodCalories = fooddata.reduce((acc, item) => acc + item.foodcal, 0);
  
      console.log(exsdata,fooddata,totalExerciseCalories,totalFoodCalories);
      res.status(200).send({
        message: "All Data Fetched Successfully",
        exerciseData: exsdata,
        foodData: fooddata,
        totalExerciseCalories,
        totalFoodCalories
      });
    } catch (error) {
      res.status(500).send({
        message: error.message || "Internal Server Error",
        error
      });
    }
  };
  


export default {getdata}