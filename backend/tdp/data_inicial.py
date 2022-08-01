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


dataFlujo = [
    {
        'id': 1,
        'fkProyecto': 1,
        'descripcion': 'instalacion de equipos mas FO',
        'coordenadas': [1, 1],
        'flujo': [
            {'key': 2, 'color': 'pink', 'loc': '300 0'  , 'nombre': 'L1/UMG'},
            {'key': 3, 'color': 'pink', 'loc': '150 0'  , 'nombre': 'L1/PEXT'},
            {'key': 4, 'color': 'pink', 'loc': '150 300', 'nombre': 'L2/CONSULTA'},
            {'key': 5, 'color': 'pink', 'loc': '150 150', 'nombre': 'AD/HOMOLOGACION'},
            {'key': 6, 'color': 'pink', 'loc': '300 300', 'nombre': 'L2/TX'},
            {'key': 7, 'color': 'pink', 'loc': '300 150', 'nombre': 'L3/PROVISION'},
            {'key': 8, 'color': 'pink', 'loc': '450 150', 'nombre': 'L3/VALIDACION'},
        ],
        'conexion': [
            {'key': -1, 'from': 5, 'to': 3},
            {'key': -2, 'from': 4, 'to': 6},
            {'key': -3, 'from': 2, 'to': 7},
            {'key': -4, 'from': 0, 'to': 4},
            {'key': -5, 'from': 3, 'to': 2},
            {'key': -6, 'from': 0, 'to': 5},
            {'key': -7, 'from': 5, 'to': 2},
            {'key': -8, 'from': 6, 'to': 7},
            {'key': -9, 'from': 7, 'to': 8},
            {'key': -10,'from': 8, 'to': 1},
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


'''

AD/HOMOLOGACION
'avance':'50%',
'documentos':'certificado de altura / EPS / prueba covid',
'contrata':'cobra',

L1/PEXT
'fibra':'dos hilos',
'nodo':'Santa Patricia',
'ODF':'4',
'sala':'datos',
'piso':'2-A',
'BC':'2',
'SFP':'1Gbps 10km',

L1/UMG
'CTO':'123abc',
'metraje':'100m',

L2/CONSULTA
'resultado':'se puede migrar sobre el recurso actual',

L2/TX
'equipo':'huawei',
'puerto':'1/2/1',
'out VLAN':'110',
'in VLAN':'10',

L3/PROVISION
'WAN':'1.1.1.1/30',
'VRF':'VRF_BCP',
'SIP loopback':'127.0.0.1/32',
'QoS':'100 plata / 50 cobre / 20 bronce',
'BW':'100Mbps',
'router':'ASR1001',

L3/VALIDACION
'contrata':'telemarketing',
'comentario':'acceso al nodo aun no gestionado',

'''

dataTrabajo = [
    {
        'id': 1,
        'fkFlujo': 1,
        'fkPersona': 1,
        'trabajo': 'L1/UMG',
        'responsable': 'Hector',
        'estado_requiere': 1,
        'estado_activo': 0,
        'estado_finalizado': 0,
        'informacion': {
            'CTO':'123abc',
            'metraje':'100m',
        },
        'sede': 'encalada'
    },
    {
        'id': 2,
        'fkFlujo': 1,
        'fkPersona': 2,
        'trabajo': 'L1/PEXT',
        'responsable': 'Juan',
        'estado_requiere': 1,
        'estado_activo': 1,
        'estado_finalizado': 0,
        'informacion': {
            'fibra':'dos hilos',
            'nodo':'Santa Patricia',
            'ODF':'4',
            'sala':'datos',
            'piso':'2-A',
            'BC':'2',
            'SFP':'1Gbps 10km',
        },
        'sede': 'encalada'
    },
    {
        'id': 3,
        'fkFlujo': 1,
        'fkPersona': 3,
        'trabajo': 'L3/VALIDACION',
        'responsable': 'Marco',
        'estado_requiere': 0,
        'estado_activo': 0,
        'estado_finalizado': 0,
        'informacion': {
            'contrata':'telemarketing',
            'comentario':'acceso al nodo aun no gestionado',
        },
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
        'informacion': {
            'temp':'temp',
        },
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
        'informacion': {
            'temp':'temp',
        },
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
        'informacion': {
            'temp':'temp',
        },
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
        'informacion': {
            'temp':'temp',
        },
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
        'informacion': {
            'temp':'temp',
        },
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
        'informacion': {
            'temp':'temp',
        },
        'sede': 'jesus maria'
    }
]
