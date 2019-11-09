#include <napi.h>
#include <DataProcessingAsyncWorker.h>

using namespace Napi;

//! function that can be called from javascript
void ProcessData(const CallbackInfo &info)
{
    //! parameters from javascript
    int count = info[0].ToNumber();
    Function cb = info[1].As<Function>();

    //! Adding task to que so we can do multi threading
    DataProcessingAsyncWorker *worker = new DataProcessingAsyncWorker(count, cb);
    worker->Queue();
}

Object Init(Env env, Object exports)
{
    exports.Set(String::New(env, "processData"),
                Function::New(env, ProcessData));
    return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)