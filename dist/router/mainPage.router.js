"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageRouter = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
const createPath = (page) => page;
router.get('/', (req, res) => {
    const title = 'Home';
    res.render(createPath('index'), { title });
});
router.get('/contacts', (req, res) => {
    const title = 'Contacts';
    const socialMedia = [
        { name: 'Github', link: 'https://github.com/seemyoon' }
    ];
    res.render(createPath('contacts'), { socialMedia, title });
});
router.get('/posts/:id', (req, res) => {
    const title = 'Post';
    res.render(createPath('post'), { title });
});
router.get('/posts', (req, res) => {
    const title = 'Posts';
    res.render(createPath('posts'), { title });
});
router.get('/add-post', (req, res) => {
    const title = 'Add Post';
    res.render(createPath('add-post'), { title });
});
router.use((req, res) => {
    const title = 'Error Page';
    res
        .status(404)
        .render(createPath('error'), { title });
});
exports.pageRouter = router;
