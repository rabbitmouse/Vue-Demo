import {
  ADD_COUNTER,
  ADD_TO_CART,
} from './mutation-types'


const actions = {
  addCart({state, commit}, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = state.cartList.find(item => item.iid === payload.iid)

      if (oldProduct) {
        commit(ADD_COUNTER, oldProduct)
        resolve('当前商品数+1')
      } else {
        payload.count = 1
        commit(ADD_TO_CART, payload)
        resolve('添加新商品成功')
      }
    })
  }
}

export default actions