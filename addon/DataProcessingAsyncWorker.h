#include <napi.h>

using namespace Napi;

class DataProcessingAsyncWorker : public AsyncWorker
{
public:
    DataProcessingAsyncWorker(int count, Function &callback);

    void Execute();

    void OnOK();

private:
    //! parameters from js to c++
    int count;
};