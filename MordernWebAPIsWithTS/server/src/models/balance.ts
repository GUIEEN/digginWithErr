import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments, Validate } from 'class-validator'

@ValidatorConstraint({ name: 'customText', async: false })
export class CustomGithubIdChecker implements ValidatorConstraintInterface {

  validate (text: string, args: ValidationArguments) {
    const regexp = new RegExp('^([1-9]+)(\/[1-9]+)?$')
    return regexp.test(text) // for async validations you must return a Promise<boolean> here
  }

  defaultMessage (args: ValidationArguments) { // here you can provide default error message if validation failed
    return 'Text ($value) is not suitable for repo/issue/user Id!'
  }

}

@Entity()
export class Balance {
  @PrimaryGeneratedColumn()
    public id: number

  @Column()
  @Validate(CustomGithubIdChecker)
    public uniqueName: string

  @Column()
    public amount: number
}
