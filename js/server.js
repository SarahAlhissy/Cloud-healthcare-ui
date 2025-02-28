const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// تحديد المجلد الذي يحتوي على ملفات HTML و CSS و JS
app.use(express.static(path.join(__dirname, 'public')));

// تشغيل الخادم
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
