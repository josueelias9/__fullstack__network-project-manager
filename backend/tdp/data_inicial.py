dataPersona = [
    {
        'id': 1,
        'nombre': 'Hector',
        'cargo': 'ingeniero de red',
        'tipo': 'especialista',
    },
    {
        'id': 2,
        'nombre': 'Juan',
        'cargo': 'gestor PEXT',
        'tipo': 'especialista',
    },
    {
        'id': 3,
        'nombre': 'Marco',
        'cargo': 'gestor UMG',
        'tipo': 'especialista',
    },
    {
        'id': 4,
        'nombre': 'Maria',
        'cargo': 'asistente',
        'tipo': 'especialista',
    },
    {
        'id': 5,
        'nombre': 'Armando',
        'cargo': 'IE',
        'tipo': 'lider',
    },
    {
        'id': 6,
        'nombre': 'Luisandra',
        'cargo': 'supervisor',
        'tipo': 'lider',
    },
    {
        'id': 7,
        'nombre': 'Melvin',
        'cargo': 'IE',
        'tipo': 'lider',
    },
    {
        'id': 8,
        'nombre': 'Josue',
        'cargo': 'IE',
        'tipo': 'lider',
    }
]


dataTrabajo = [
    {
        'id': 1,
        'fkFlujo': 1,
        'fkPersona': 1,
        'trabajo': 'UMG',
        'responsable': 'Hector',
        'estado_requiere': 1,
        'estado_activo': 0,
        'estado_finalizado': 0,
        'informacion': 'esta tarea consiste en tal y tal cosas',
        'sede': 'encalada'
    },
    {
        'id': 2,
        'fkFlujo': 1,
        'fkPersona': 2,
        'trabajo': 'PEXT',
        'responsable': 'Juan',
        'estado_requiere': 1,
        'estado_activo': 1,
        'estado_finalizado': 0,
        'informacion': 'esta tarea consiste en tal y tal cosas',
        'sede': 'encalada'
    },
    {
        'id': 3,
        'fkFlujo': 1,
        'fkPersona': 3,
        'trabajo': 'equipos',
        'responsable': 'Marco',
        'estado_requiere': 0,
        'estado_activo': 0,
        'estado_finalizado': 0,
        'informacion': 'esta tarea consiste en tal y tal cosas',
        'sede': 'encalada'
    },
    {
        'id': 4,
        'fkFlujo': 2,
        'fkPersona': 1,
        'trabajo': 'tarea 1',
        'responsable': 'Hector',
        'estado_requiere': 0,
        'estado_activo': 1,
        'estado_finalizado': 0,
        'informacion': 'esta tarea consiste en tal y tal cosas',
        'sede': 'jesus maria'
    },
    {
        'id': 5,
        'fkFlujo': 2,
        'fkPersona': 2,
        'trabajo': 'tarea 2',
        'responsable': 'Juan',
        'estado_requiere': 1,
        'estado_activo': 1,
        'estado_finalizado': 1,
        'informacion': 'esta tarea consiste en tal y tal cosas',
        'sede': 'jesus maria'
    },
    {
        'id': 6,
        'fkFlujo': 2,
        'fkPersona': 3,
        'trabajo': 'tarea 3',
        'responsable': 'Marco',
        'estado_requiere': 1,
        'estado_activo': 1,
        'estado_finalizado': 0,
        'informacion': 'esta tarea consiste en tal y tal cosas',
        'sede': 'jesus maria'
    },
    {
        'id': 7,
        'fkFlujo': 3,
        'fkPersona': 1,
        'trabajo': 'tarea 1',
        'responsable': 'Hector',
        'estado_requiere': 0,
        'estado_activo': 1,
        'estado_finalizado': 0,
        'informacion': 'esta tarea consiste en tal y tal cosas',
        'sede': 'jesus maria'
    },
    {
        'id': 8,
        'fkFlujo': 3,
        'fkPersona': 2,
        'trabajo': 'tarea 2',
        'responsable': 'Juan',
        'estado_requiere': 1,
        'estado_activo': 1,
        'estado_finalizado': 1,
        'informacion': 'esta tarea consiste en tal y tal cosas',
        'sede': 'jesus maria'
    },
    {
        'id': 9,
        'fkFlujo': 3,
        'fkPersona': 3,
        'trabajo': 'tarea 3',
        'responsable': 'Marco',
        'estado_requiere': 1,
        'estado_activo': 1,
        'estado_finalizado': 0,
        'informacion': 'esta tarea consiste en tal y tal cosas',
        'sede': 'jesus maria'
    }
]


dataFlujo = [
    {
        'id': 1,
        'fkProyecto': 1,
        'descripcion': 'instalacion de equipos mas FO',
        'coordenadas': [1, 1],
        'flujo': [
            {
                'key': 2, 
                'color': 'pink', 
                'loc': '300 0', 
                'nombre': ''
            },
            {'key': 3, 'color': 'pink', 'loc': '150 0', 'nombre': ''},
            {'key': 5, 'color': 'pink', 'loc': '150 300', 'nombre': ''},
            {'key': 4, 'color': 'pink', 'loc': '150 150', 'nombre': ''},
            {'key': 6, 'color': 'pink', 'loc': '300 300', 'nombre': ''},
        ],
        'conexion': [
            {'key': -1, 'from': 0, 'to': 3},
            {'key': -2, 'from': 4, 'to': 1},
            {'key': -3, 'from': 2, 'to': 1},
            {'key': -4, 'from': 0, 'to': 4},
            {'key': -5, 'from': 3, 'to': 2},
            {'key': -6, 'from': 0, 'to': 5},
            {'key': -7, 'from': 5, 'to': 6},
            {'key': -7, 'from': 6, 'to': 1},
        ],
    },
    {
        'id': 2,
        'fkProyecto': 1,
        'descripcion': 'instalacion de equipos mas FO',
        'coordenadas': [1, 1],
        'flujo': [
            {'key': 2, 'color': 'pink', 'loc': '300 0', 'nombre': 'tarea 1'},
            {'key': 3, 'color': 'pink', 'loc': '150 0', 'nombre': 'tarea 2'},
            {'key': 4, 'color': 'pink', 'loc': '150 300', 'nombre': 'tarea 3'},
        ],
        'conexion': [
            {'key': -1, 'from': 0, 'to': 2},
            {'key': -3, 'from': 0, 'to': 4},
            {'key': -5, 'from': 2, 'to': 1},
            {'key': -6, 'from': 3, 'to': 4},
        ],
    },
    {
        'id': 3,
        'fkProyecto': 1,
        'descripcion': 'solo configuracion',
        'coordenadas': [1, 1],
        'flujo': [
            {'key': 2, 'color': 'pink', 'loc': '300 0', 'nombre': 'tarea 1'},
            {'key': 3, 'color': 'pink', 'loc': '150 0', 'nombre': 'tarea 2'},
            {'key': 4, 'color': 'pink', 'loc': '150 300', 'nombre': 'tarea 3'},
        ],
        'conexion': [
            {'key': -1, 'from': 0, 'to': 2},
            {'key': -3, 'from': 0, 'to': 4},
            {'key': -5, 'from': 2, 'to': 1},
            {'key': -6, 'from': 3, 'to': 4},
        ],
    },
    {
        'id': 4,
        'fkProyecto': 2,
        'descripcion': 'solo equipos',
        'coordenadas': [1, 1],
        'flujo':{'temp':'temp'},
        'conexion':{'temp':'temp'},
    },
]


dataProyecto = [
    {
        'id': 1,
        'fkPersona': 6,
        'cliente': 'Universidad de Lima',
        'JP': 'Marco',
        'descripcion': 'Migracion de la cabecera',
        'flujosTotal': 10,
        'flujosResueltos': 5,
    },
    {
        'id': 2,
        'fkPersona': 7,
        'cliente': 'Rockys',
        'JP': 'Julio Ponce',
        'descripcion': 'baja de enlaces',
        'flujosTotal': 10,
        'flujosResueltos': 5,
    },
    {
        'id': 3,
        'fkPersona': 5,
        'cliente': 'Petroperu',
        'JP': 'Katherine',
        'descripcion': 'SDWAN',
        'flujosTotal': 8,
        'flujosResueltos': 7,
    },
    {
        'id': 4,
        'fkPersona': 8,
        'cliente': 'Llamagas',
        'JP': 'Karin Mendoza',
        'descripcion': 'cambio de medio',
        'flujosTotal': 15,
        'flujosResueltos': 14,
    },
    {
        'id': 5,
        'fkPersona': 8,
        'cliente': 'Chinalco',
        'JP': 'Denisse',
        'descripcion': 'metrolan',
        'flujosTotal': 20,
        'flujosResueltos': 8,
    },
    {
        'id': 6,
        'fkPersona': 7,
        'cliente': 'BCP',
        'JP': 'Denisse',
        'descripcion': 'migracion de red',
        'flujosTotal': 12,
        'flujosResueltos': 3,
    },
    {
        'id': 7,
        'fkPersona': 7,
        'cliente': 'IBK',
        'JP': 'Marco Morales',
        'descripcion': 'migracion de red',
        'flujosTotal': 15,
        'flujosResueltos': 15,
    }
]
