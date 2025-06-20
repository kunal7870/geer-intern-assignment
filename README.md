## 🔧 Getting Started (HOW to run the project)

###  1. Clone the repository

```bash
git clone https://github.com/kunal7870/geer-intern-assignment.git
cd ./geer-intern-assignment
```
### 2. Backend setup

```bash
cd ./Backend
npm i
npm start
```
### 3. Frontend setup
```bash
cd ./Frontend
npm i
npm run dev
```
### 4. Ready 
-Go to the local link obtained after running frontend.
## ⚙️ Tech Stack Used

- **Frontend:** Next.js 14, Tailwind CSS
- **Backend:** Express.js
- **Styling:** Tailwind CSS

### TO Test Only Backend (API EndPoints) Use Postman
```
GET request -    http://localhost:5000/api/products
```
```
POST request -   http://localhost:5000/api/products
```
- on Body
```
  {
  "name": "Shoes",
  "price": 899,
  "imageUrl": "add url of the image"
  }
```
```
DELETE request - http://localhost:5000/api/products/1750364410588
```
Replace "1750364410588" with product id  to delete

### Additional Instruction
- First run the Backend and then run Frontend 
- after running frontend file it will give :
- Local:        http://localhost:3001 
- go to this local site 
- on home page i've added two options one "*products page*" as mentioned in the assignment.
- and other is to show the "*manage product*" page where i've used the api built with express.js to manage product as mentioned in assignment task.
