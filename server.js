const { urlencoded } = require('express');
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// initialize app
cosnt app = express();
const PORT = 3000 ||process.env.PORT ;

//body parsing, static, route middleware
app.use(express.json());
app.use(express.urlencoded({ extemded: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//port start
app.listen(PORT, () => console.log(`Listening to Port: ${PORT}`));