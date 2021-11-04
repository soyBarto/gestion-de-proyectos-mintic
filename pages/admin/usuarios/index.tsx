import Link from 'next/link';
import React from 'react';
import Head from 'next/head'

const index = () => {
    return (
        <div>
            <Head>
                <title>Admin Usuarios | Gestión de proyectos</title>
            </Head>
            <div>Pagina de admin de usuarios</div>
            <Link href='/'>
                <a>Ir al home</a>
            </Link>
        </div>
    )
};

export default index;