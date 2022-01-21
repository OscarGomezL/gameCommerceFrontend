import Layout from "../components/Layout"

export default function Xbox360() {
	let arrForImgs = []
	for(let i = 1; i<11; i++) arrForImgs.push(i)
	console.log(arrForImgs)
	return (
		<div className='page'>
			<Layout>
				{arrForImgs.map(num=><img key={`xbox${num}`} src={`http://localhost:4000/v1/xboxGamesImages/${num}.jpg`}/>)}	
			</Layout>
		</div>
	)
}