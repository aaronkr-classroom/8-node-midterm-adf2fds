const homeController = {
    //GET 메소드를 처리하는 함수
    getIndex: (req, res) => {
        res.render('index', { pageTitle: 'Home' });
    },

    // GET 메소드를 처리하는 함수
    getTransportation: (req, res) => {
        res.render('transportation', { pageTitle: 'Transportation' });
    },

    // GET 메소드를 처리하는 함수
    getContact: (req, res) => {
        res.render('contact', { pageTitle: 'Contact'});
    },

    // POST 메소드를 처리하는 함수
    postContact: (req, res) => {
        // 폼 데이터 처리 등 필요한 작업 수행
        // 여기서는 간단히 감사 메시지 페이지로 리다이렉트합니다.
        res.redirect('/thanks');
    }
};

module.exports = homeController;