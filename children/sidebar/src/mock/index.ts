
export const testRoute = [
	{
		id: '1',
		name: '人员管理',
		path: '/home',
    meta:{
      icon: '',
      role: [],
      isDisabled: false,
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
          systemName: 'person'
        }
      }
		],
	},
	{
		id: '2',
		name: '系统管理',
		path: '/system',
    meta:{
      icon: '',
      role: [],
      isDisabled: false,
      systemName: 'system'
    },
		children: [
			{
				id: '2-1',
				name: '权限管理',
				path: '/systemRole',
        meta:{
          icon: '',
          role: [],
          systemName: 'system',
          isDisabled: true
        },
				children: [],
			},
      {
				id: '2-2',
				name: '用户管理',
				path: '/systemRole',
        meta:{
          icon: '',
          role: [],
          isDisabled: false,
          systemName: 'system'
        },
				children: [],
			},
      {
				id: '2-3',
				name: '菜单管理',
				path: '/systemMenu',
        meta:{
          icon: '',
          role: [],
          isDisabled: false,
          systemName: 'system'
        },
				children: [],
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
      isDisabled: false,
      systemName: 'system'
    },
    children: []
  },
]