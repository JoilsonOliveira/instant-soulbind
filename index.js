//beng beng
module.exports = function Soulbind(dispatch) {
	
	dispatch.hook('S_LOGIN', (event) => {
		cid = event.cid
	})
	
    dispatch.hook('C_BIND_ITEM_BEGIN_PROGRESS', (event) => {
        setTimeout(() => {
            dispatch.toServer('C_BIND_ITEM_EXECUTE', {
                "contractId": event.contractId
            }),
			
			dispatch.toClient('S_CANCEL_CONTRACT', {
				senderId: event.cid,
				recipientId: 0,
				type: 32,
				id: event.contractId
			})
        }, 0)
    })
        
    dispatch.hook('C_BIND_ITEM_EXECUTE', (event) => {
        return false
    })
}

		