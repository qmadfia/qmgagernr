// Database Login Credentials
const loginCredentials = {
    admin: {
        username: '1',
        password: '1'
    },
    users: [
        {
            username: 'Plant1',
            password: '111'
        },
        {
            username: 'Plant2',
            password: '222'
        },
        {
            username: 'Bottom',
            password: '123'
        },
        {
            username: 'MA',
            password: '123'
        }
    ]
};

// Fungsi validasi login admin
function validateAdminLogin(username, password) {
    return username === loginCredentials.admin.username && 
           password === loginCredentials.admin.password;
}

// Fungsi validasi login user
function validateUserLogin(username, password) {
    return loginCredentials.users.some(user => 
        user.username === username && user.password === password
    );
}

// Data Penilai (Assessor)
const assessorList = [
    'Irma',
    'Iksan',
    'Ope'
];
