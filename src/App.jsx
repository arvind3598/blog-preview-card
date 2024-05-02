const App = () => {
	return (
		<main className="w-screen min-h-screen flex justify-center items-center min-w-72 px-[24px]">
			<div className="wrapper border border-black rounded-[20px] min-w-72 w-96 p-[24px] bg-white flex flex-col gap-6">
				<div>
					<img className="rounded-[10px]" src="./images/illustration-article.svg" alt="Image" />
				</div>
				<div className="flex gap-[12px] flex-col">
					<div className="category">
						<p className="font-extrabold flex items-center justify-center rounded-[4px] w-[82px] h-[29px]">Learning</p>
					</div>
					<div>
						<p className="text-sm sm:text-base">Published 21 Dec 2023</p>
					</div>
					<div>
						<h1 className="font-extrabold text-lg hover:cursor-pointer hover:text-[#f4d04e] sm:text-2xl">HTML & CSS foundations</h1>
					</div>
					<div>
						<p className="desc text-sm sm:text-base">
							These languages are the backbone of every website, defining
							structure, content, and presentation.
						</p>
					</div>
				</div>
				<div className="flex justify-between items-center w-[129px]">
					<img src="./images/userpic.png" alt="Image" />
					<strong className="text-[14px] font-extrabold">Greg Hooper</strong>
				</div>
			</div>
		</main>
	);
};

export default App;
