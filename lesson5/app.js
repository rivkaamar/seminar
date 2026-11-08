import express, { response } from 'express'
import list from './data.js'
import { descriptionExists, validDescription } from './middlewares.js'

const app = express()

// middlewares
// middle - אמצע
// ware - תכנות
// software - תוכנה
// hardware - חומרה
// middleware - תכנות ביניים / קוד ביניים
// קוד שקורה לפני קריאת השרת
// שימושים:
// בדיקות תקינות
// הרשאות גישה
// חישוב, עדכון נתונים מסוימים 

// סימן זיהוי:
// 1. next - חובה
// 2. use - לא חובה

// שיטה מס 1 להגדרת מידלוור
// מידלוור שמוגדר לניתוב מסוים
// sytax: 
// [server].use('[path]', ([request], [response], next) => {
//     // something...
//     // חובה לבצע את אחת מהפעולות הבאות
//     // next() - העברה לקריאת שרת
//     // res.send... - החזרת תגובה
// })

// js לאובייקט של json המרה של הנתונים שהגיעו בגוף הבקשה מ
// undefined אם לא נבצע המרה גוף הבקשה יהיה 
app.use(express.json())

// מידלוור ללא פרמטר ניתוב או עם ניתוב ריק
// מופעל בכל קריאת שרת
// app.use('', (req, res, next) => {
//     console.log('products');
//     next()
// })

app.use((req, res, next) => {
    console.log('products');
    next()
})

// מידלוור שבודק שתיאור מוצר נשלח - שדה חובה
// app.use('/product', (req, res, next) => {
//     const { description } = req.body
//     // מידלוור חייב להעביר למידלוור הבא או לסיים את הקריאה
//     if (!description) {
//         return res.json({ error: 'description is required!' })
//     }
//     next()
// })

// מידלוור שבודק תקינות של תיאור מוצר - בין 3 ל 50 תווים
// app.use('/product', (req, res, next) => {
//     const { description } = req.body
//     if (description.length < 3 || description.length > 50) {
//         return res.json({ error: 'invalid description!' })
//     }
//     next()
// })

app.use('/product/:index', (req, res, next) => {
    const { index } = req.params
    if (index < 0 || index >= list.length) {
        return res.send({ error: 'index is out of range' })
    }
    next()
})

// endpoints - קריאות שרת
app.get('', (req, res) => {
    return res.send(list)
})

app.post('/product', descriptionExists, validDescription, (req, res) => {

    const { description, price, amount } = req.body
    if (!price || !amount) {
        return res.send({ error: 'נתונים חסרים...' })
    }

    list.push({ description, price, amount })
    res.send('adding product successfully!')
})

app.patch('/product/:index', validDescription, (req, res) => {
    const { description, price, amount } = req.body
    console.log(req.body);

    const { index } = req.params

    list[index] = {
        description: (description ? description : list[index].description),
        price: price ? price : list[index].price,
        amount: amount ? amount : list[index].amount,
    }
    res.send('update product successfully!')
})

app.delete('/product/:index', (req, res) => {
    list.splice(req.params.index, 1)
    res.send('delete product successfully!')
})

const port = 4000
app.listen(port, () => {
    console.log(`my application is running on http://localhost:${port}`);
})