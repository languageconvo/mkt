function logMessage(msg: string) {
  console.log(msg);
}

function logError(e: Error) {
  console.log(e);
}

const logErr = {
  msg: logMessage,
  err: logError,
};

export default logErr;
