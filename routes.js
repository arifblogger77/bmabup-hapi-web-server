const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.response('Homepage')
                .type('text/plain')
                .code(200);
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return h.response('Halaman tidak dapat diakses dengan method tersebut')
                .type('text/plain')
                .code(400);
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return h.response('About page')
                .type('text/plain')
                .code(200);
        },
    },
    {
        method: 'POST',
        path: '/about',
        handler: (request, h) => {
            const { name } = request.payload;
            return h.response(`Halo, ${name}! Ini adalah halaman about`)
                .type('text/plain')
                .code(200);
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return h.response('Halaman tidak dapat diakses dengan method')
                .type('text/plain')
                .code(400);
        },
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = 'stranger' } = request.params;
            const { lang } = request.query;

            if (lang === 'id') {
                return h.response(`Hai, ${name}!`)
                    .type('text/plain')
                    .code(200);
            }

            return h.response(`Hello, ${name}!`)
                .type('text/plain')
                .code(200);
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return h.response('Halaman tidak ditemukan')
                .type('text/plain')
                .code(404);
        },
    },
];

module.exports = routes;