import { DOM } from "thorium-framework";

export type ThoriumPromiseProps = {
  promise:(...args:any[]) => Promise<any>;
  callback:( result:any ) => any;
}

export function ThoriumPromise( props:ThoriumPromiseProps ){

  console.log({ props })

  return {
    localName : 'div',
    childrens : [
      {
        localName : 'div',
        proto : {
          afterMounting( target ){
            
            target.setAttribute('status' , 'pending');

            console.log({ target });

            props.promise()
              .then((result) => {
                console.log({ result })
                target.setAttribute('status' , 'done');
                let x = props.callback( result );
                if(x)try{
                  DOM.render( x , target );
                }
                catch(error){ console.error(error) }
              })
              .catch((error) => {
                console.error(error);
                target.setAttribute('status' , 'error');
              })

          }
        }
      }
    ]
  }

}