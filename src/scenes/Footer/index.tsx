import logo from "@/assets/Logo.png"

type Props = {}

function Footer({}: Props) {
  return (
    <footer className=" py-10 bg-primary-100" >
        <div className=" justify-content gap-16 mx-auto md:flex w-5/6" >
            <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={logo} alt="how about you shut the fuck up" />
                    <p className="my-5"> breh i dont really know if that is the thing that you would like to keep but oh man </p>
                    <p> Designed by @ Dongol</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold"> Links</h4>
                <p className="my-5 transition duration-500 hover:underline"> breh i said please stop doing this shiiitttt</p>
                <p className="my-5 transition duration-500 hover:underline"> It Is What It is Mohanad </p>
            </div>
            <div>
            <h4 className="font-bold mt-16 basis-1/4 md:mt-0"> Contact US</h4>
                <p className="my-5 transition duration-500 hover:underline"> We wont respond</p>
            </div>

        </div>
    </footer>
  )
}

export default Footer