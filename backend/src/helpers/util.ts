import * as bcrypt from 'bcrypt';
const saltRounds = 10;  // 10 is the default salt rounds

export const hashPassword = async (plainPassword: string) => {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        return await bcrypt.hash(plainPassword, salt);
    } catch (error) {
        // throw new Error('Failed to hash password');
        console.log(error);
        return null;
    }
}

export const comparePassword = async (plainPassword: string, hashPassword: string) => {
    try {
        return await bcrypt.compare(plainPassword, hashPassword);
    } catch (error) {
        // throw new Error('Failed to compare password');
        console.log(error);
        return null;
    }
}
