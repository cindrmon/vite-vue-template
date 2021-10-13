export default {
	state: {
		count: 0,
	},
	getters: {
		getCount: (state: any) => state.count,
	},
	mutations: {
		setCount: (state: any, e: number) => (state.count = e),
		add: (state: any) => state.count++,
	},
	actions: {
		setCount({ commit }: any, e: number) {
			commit("setCount", e)
		},
		add({ commit }: any) {
			commit("add")
		},
	},
}
