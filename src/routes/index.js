const cookieParser = require('cookie-parser');
const { Router } = require('express');

const arrayColumnsRouter = require('./arrayColumns.routes');
const columnRouter = require('./column.routes');
const memberRouter = require('./members.routes');
const sectionRouter = require('./section.routes');
const taskRouter = require('./tasks.routes');
const photoRouter = require('./photos.routes');

const router = Router();

router.use(cookieParser());

taskRouter(router);
columnRouter(router);
sectionRouter(router);
memberRouter(router);
arrayColumnsRouter(router);
photoRouter(router); // Testowy endpoint
module.exports = router;
