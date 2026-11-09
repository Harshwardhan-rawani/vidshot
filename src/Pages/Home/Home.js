



import Homehero from '../../component/Home/Homehero';
import Homems from '../../component/Home/Homems';
import Hometp from '../../component/Home/Hometp';
import Homes from '../../component/Home/Homes';
import Homeop from '../../component/Home/Homeop';
import Homeoc from '../../component/Home/Homeoc';
import Homeov from '../../component/Home/Homeov';
import Homefm from '../../component/Home/Homefm';
import Homertc from '../../component/Home/Homertc';






export default function Home({services}) {
  return (
    <div className="mx-auto max-w-9xl bg-white px-4 py-8 sm:px-6 lg:px-8 mt-12">
     {/* hero */}
     <Homehero services={services}/>
     {/* Metrices */}
     <Homems/>
     {/* Trustedpartner */}
     <Hometp/>
     {/* Services */}
     <Homes/>
     {/* our process */}
     <Homeop/>
     {/* our client */}
     <Homeoc/>
     {/* our vision */}
     <Homeov/>
     {/* Ready to work */}
     <Homertc/>
    {/* feedback */}
      <Homefm/>

    </div>
  );
}
