const errorController = {
    // 에러 처리를 담당하는 함수
    errorHandler: (err, req, res, next) =>{
        console.error(err.stack);
        res.status(500).render('error', { pageTitle: 'Error' });
    }
};

module.exports = errorController;