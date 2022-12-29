

export const testRoute = [
	{
		id: '1',
		name: '人员管理',
		path: '/home',
    meta:{
      icon: '',
      role: [],
      isDisabled: false,
      level: 1,
      systemName: 'person'
    },
		children: [
			{
				id: '1-1',
				name: '人员列表',
				path: '/homeList',
        meta:{
          icon: '',
          role: [],
          isDisabled: false,
          level: 2,
          systemName: 'person'
        }
			},
      {
        id: '1-2',
				name: '人员详情',
				path: '/homeDetail',
        meta:{
          icon: '',
          role: [],
          isDisabled: false,
          level: 2,
          systemName: 'person'
        }
      }
		],
	},
  {
    id: '3',
    name: '关于',
    path: '/about',
    meta:{
      icon: '',
      role: [],
      level: 1,
      isDisabled: false,
      systemName: 'person'
    },
    children: []
  },
	{
		id: '2',
		name: '系统管理',
		path: '/system',
    meta:{
      icon: '',
      role: [],
      isDisabled: false,
      level: 1,
      systemName: 'system'
    },
		children: [
			{
				id: '2-1',
				name: '角色管理',
				path: '/systemRole',
        meta:{
          icon: '',
          role: [],
          systemName: 'system',
          level: 2,
          isDisabled: true
        },
				children: [],
			},
      {
				id: '2-2',
				name: '菜单管理',
				path: '/systemMenu',
        meta:{
          icon: '',
          role: [],
          isDisabled: false,
          level: 2,
          systemName: 'system'
        },
				children: [],
			},{
        id: '2-4',
				name: '权限管理',
				path: '/systemAuth',
        meta:{
          icon: '',
          role: [],
          level: 2,
          isDisabled: false,
          systemName: 'system'
        },
				children: [],
      }
		],
	},

]


