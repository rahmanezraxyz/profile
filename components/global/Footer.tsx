import Link from "next/link";
import React from "react";
import { footer } from "@/data/global";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
      <div className="w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-3 justify-between items-start">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="text-left mb-5 sm:mb-0">
              <h4 className="uppercase text-fun-gray text-sm font-bold">
                {item.title}
              </h4>
              <div>
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-4">
                      {item.leavesWebsite ? (
                        <a
                          href={item.link}
                          target="_blank"
                          className="items-center flex"
                        >
                          {item.icon && (
                            <span className="pr-2 -mb-1">
                              <Image src={item.icon} width={20} height={20} />
                            </span>
                          )}
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.link}>{item.name}</Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="text-center col-span-2 sm:col-auto sm:text-left pt-8 sm:mt-0 sm:pt-0  sm:border-0">
          
          <div className="space-y-2 mt-4 w-full flex items-center sm:items-start flex-col">
            {footer.support.buymeacoffee !== "" && (
              
                
                <a
                  href={`https://drive.google.com/file/d/1tc3hxWyss06ZEzscpzO2lzGU0-0ycpdy/view?usp=sharing`}
                  target="_blank"
                  className="flex border-2 rounded-lg text-lg font-bold p-3 h-14 w-36 items-center justify-center text-center bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors"
                >
                  Resume
                  {/* <img
                    src=""
                    className="h-12 mr-2 hover:opacity-80 opacity-100 transition-opacity"
                  /> */}
                </a>
                
                
              
            )}
            {footer.support.paypal !== "" && (
             
                <a
                  href={`https://www.youtube.com/channel/UCtGCzT5QPCEjFcohRhjA71w`}
                  target="_blank"
                  className="flex border-2 rounded-lg text-lg font-bold p-3 h-14 w-36 items-center justify-center text-center bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors"
                >
                  YouTube
                  
                </a>
                
             
            )}
            
          </div>
        </div>
      </div>
      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark">
        <p className="flex flex-col items-center justify-center ">
         
          <div className="mt-2 text-xs ">
            Edited by {" "}
            <a
              href="mailto:faizanjavair@gmail.com"
              className="text-fun-gray-light font-medium"
            >
              Faizan Javair
            </a>
            . Rights reserved by {""}
            <a
              href="https://github.com/braydentw/braydentw.io"
              className="text-fun-gray-light font-medium"
            >
              Brayden Wright.
            </a>
            
          </div>
        </p>
      </div>
      <div className="mt-8 text-center sm:text-right sm:-mt-12">
        <a
          className="w-auto inline-flex items-center sm:w-auto font-bold flex-shrink text-xs border border-fun-pink px-4 py-2 rounded-xl text-fun-pink cursor-pointer opacity-50"
          href="https://github.com/braydentw/braydentw.io"
          target="_blank"
          rel="nooreferrer"
        >
          <Image
            src="/static/icons/github.svg"
            width={16}
            height={16}
            alt="Github Icon"
          />
          <span className="ml-2">View Source Code </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
