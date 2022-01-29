import {myAccountSwal} from '../../logic/MyAccount.logic'


const MyAccount = () => {	
	return (
		<div 
			className='my-account-container nav-container' 
			onClick={myAccountSwal}
		>
			My Account
		</div>
	)
}
export default MyAccount