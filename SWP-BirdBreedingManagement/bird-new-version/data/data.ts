
interface StarReview {
    crowIcons: number,
    eggIcons: number
}

interface Bird {
    id: string,
    bird_type?: string,
    isMale?: string,
    hatch_date?: string,
    father_id?: string,
    mother_id?: string,
    cage_id?: string,
    isAlive?: string,
    age_range?: string,
    mutation_rate?: number,
    mutation_note?: string,
    weight?: number,
    featherColor?: string,
    image?: string
}

interface Staff {
    id: string,
    username?: string,
    email?: string,
    password?: string,
    fullname?: string,
    created_by?: string,
    created_date?: string,
    role_id?: string,
}


export const birds: Bird[] = [
    {
        "id": 'A01',
        "bird_type": "Chich Choe Lua",
        "isMale": "Trong",
        "hatch_date": "12/02/2023",
        "father_id": "B01",
        "mother_id": "C01",
        "cage_id": "D01",
        "isAlive": "1",
        "age_range": "Chim Non",
        "mutation_rate": 1,
        "mutation_note": "Duoi Dai",
        "weight": 280,
        "featherColor": "Xanh",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2FbienhoathanhsonD0%2Fchim-chich-choe-lua%2F&psig=AOvVaw0KtIVpEOiGHXfDR8RY5PYa&ust=D697427044081000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCID369KO94EDFQAAAAAdAAAAABAE",

    },
    {
        "id": 'A02',
        "bird_type": "Chich Choe Than",
        "isMale": "Mai",
        "hatch_date": "22/02/2023",
        "father_id": "B02",
        "mother_id": "C02",
        "cage_id": "D02",
        "isAlive": "1",
        "age_range": "Chim Chuyen Cành",
        "mutation_rate": 5,
        "mutation_note": "Mat Do",
        "weight": 300,
        "featherColor": "Vang",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fvi.alongwalker.co%2F89-hinh-anh-chim-chich-choe-than-va-chich-choe-lua-dep-nhat-s361197.html&psig=AOvVaw0KtIVpEOiGHXf1R8RY5PYa&ust=1697427044081000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCID369KO94EDFQAAAAAdAAAAABAI",

    },
    {
        "id": 'A03',
        "bird_type": "Chich Choe Lua",
        "isMale": "Trong",
        "hatch_date": "32/02/2023",
        "father_id": "B03",
        "mother_id": "C03",
        "cage_id": "D03",
        "isAlive": "1",
        "age_range": "Chim Non",
        "mutation_rate": 3,
        "mutation_note": undefined,
        "weight": 250,
        "featherColor": "trang",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fvnexpress.net%2Fhanh-khach-mat-chich-choe-10-700-usd-4033557.html&psig=AOvVaw0KtIVpEOiGHXf1R8RY5PYa&ust=1697427044081000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCID369KO94EDFQAAAAAdAAAAABAO",

    },
]

export const cages = [{}, {}]

export const staffs: Staff[] = [
    {
        "id": '1',
        "username": "minhduy",
        "email": "tnmd@gmail.com",
        "password": "123456789",
        "fullname": "Tran Ngo Minh Duy",
        "created_by": '3',
        "created_date": "12/12/2000",
        "role_id": '1',
    },
    {
        "id": '2',
        "username": "quoctinh",
        "email": "mvqt@gmail.com",
        "password": "987654321",
        "fullname": "Mai Van Quoc Tinh",
        "created_by": '3',
        "created_date": "12/12/2000",
        "role_id": '1',
    },
    {
        "id": '3',
        "username": "minhduy",
        "email": "tnmd@gmail.com",
        "password": "123456789",
        "fullname": "Tran Ngo Minh Duy",
        "created_by": undefined,
        "created_date": "12/12/2000",
        "role_id": '1',
    },
]

