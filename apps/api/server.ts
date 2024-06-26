import { app } from "./app/routes";
import { sequelize } from './config/database'

// init sequelize
(async () => {
  await sequelize.sync({ alter: true });
})(); 

const PORT = 3000

app.listen(PORT , () => {
  console.log(`Server is running on port ${PORT}`);
});