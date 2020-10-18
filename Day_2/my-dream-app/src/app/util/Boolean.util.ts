export class BooleanUtil {
  /** @deprecated use arg0: string === 'true' instead */
  static parseBoolean(arg0: string | boolean): boolean {
    if (arg0 === 'true' || arg0 === true) {
      return true
    } else if (arg0 === 'false' || arg0 === false) {
      return false
    } else {
      throw new Error('Parse Error')
    }
  }
}