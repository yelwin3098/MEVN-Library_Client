const en = {
    common: {
      or: 'ဒါမှမဟုတ်',
      cancel: 'ပယ်ဖျက်ပါ',
      reset: 'ပြန်လည်စတင်',
      save: 'သိမ်းဆည်းပါ',
      search: 'ရှာပါ',
      edit: 'တည်းဖြတ်ပါ',
      remove: 'ဖယ်ရှားပါ',
      new: 'အသစ်',
      export: 'Excel သို့တင်ပို့ပါ',
      noDataToExport: 'တင်ပို့ရန်အချက်အလက်များမရှိပါ',
      import: 'သွင်းကုန်',
      discard: 'ဖယ်',
      yes: 'ဟုတ်တယ်',
      no: 'မဟုတ်ဘူး',
      pause: 'ခေတ္တရပ်နားသည်',
      areYouSure: 'သေချာလား?',
      view: 'ကြည့်ရှုပါ',
      destroy: 'ဖျက်ပါ',
      mustSelectARow: 'အတန်းကိုရွေးပါ',
      confirm: 'အတည်ပြုပါ',
    },
  
    app: {
      title: 'စာကြည့်တိုက်',
    },
  
    entities: {
      loan: {
        name: '',
        label: 'ချေးငွေများ',
        menu: 'ချေးငွေများ',
        exporterFileName: 'loan_export',
        list: {
          menu: 'ချေးငွေများ',
          title: 'ချေးငွေများ',
        },
        create: {
          success: 'Loan saved successfully',
        },
        update: {
          success: 'Loan saved successfully',
        },
        destroy: {
          success: 'Loan deleted successfully',
        },
        destroyAll: {
          success: 'Loan(s) deleted successfully',
        },
        edit: {
          title: 'Edit Loan',
        },
        fields: {
          id: 'အိုင်ဒီ',
          'book': 'စာအုပ်',
          'member': 'အသင်းဝင်',
          'issueDateRange': 'ထုတ်ပြန်ရက်စွဲ',
          'issueDate': 'ထုတ်ပြန်ရက်စွဲ',
          'dueDateRange': 'နောက်ဆုံးရက်',
          'dueDate': 'နောက်ဆုံးရက်',
          'returnDateRange': 'ပြန်လာသည့်ရက်စွဲ',
          'returnDate': 'ပြန်လာသည့်ရက်စွဲ',
          'status': 'အခြေအနေ',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'inProgress': 'ဆောင်ရွက်ဆဲဖြစ်သည်',
            'overdue': 'ရက်ကျော်နေပြီ',
            'closed': 'ပိတ်သိမ်း',
          },
        },
        new: {
          title: 'New Loan',
        },
        view: {
          title: 'View Loan',
        },
        importer: {
          title: 'Import Loans',
          fileName: 'loan_import_template',
          hint:
            '',
        },
        validation:{
          bookOutOfStock:'စိတ်မကောင်းပါ၊ ဤစာအုပ်သည်ကုန်သွားပါသည်',
        },
      },
  
      book: {
        name: 'စာအုပ်',
        label: 'စာအုပ်များ',
        menu: 'စာအုပ်များ',
        exporterFileName: 'book_export',
        list: {
          menu: 'စာအုပ်များ',
          title: 'စာအုပ်များ',
        },
        create: {
          success: 'စာအုပ်အောင်မြင်စွာသိမ်းဆည်းထား',
        },
        update: {
          success: 'စာအုပ်အောင်မြင်စွာသိမ်းဆည်းထား',
        },
        destroy: {
          success: 'စာအုပ်အောင်မြင်စွာသိမ်းဆည်းထား',
        },
        destroyAll: {
          success: 'စာအုပ် (များ) ကိုအောင်မြင်စွာဖျက်လိုက်သည်',
        },
        edit: {
          title: 'စာအုပ်တည်းဖြတ်',
        },
        fields: {
          id: 'Id',
          'isbn': 'ISBN',
          'title': 'ခေါင်းစဥ်',
          'author': 'စာရေးသူ',
          'numberOfCopiesRange': 'မိတ္တူအရေအတွက်',
          'numberOfCopies': 'မိတ္တူအရေအတွက်',
          'stockRange': 'ကုန်ပစ္စည်း',
          'stock': 'ကုန်ပစ္စည်း',
          'images': 'ပုံ',
          'status': 'အခြေအနေ',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'available': 'ရရှိနိုင်',
            'unavailable': 'မရနိုင်ပါ',
          },
        },
        new: {
          title: 'စာအုပ်အသစ်',
        },
        view: {
          title: 'စာအုပ်ကြည့်ပါ',
        },
        importer: {
          title: 'Import Books',
          fileName: 'book_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },
    },
  
    auth: {
      profile: {
        title: 'သင့်ရဲ့ကိုယ့်ရေးကိုယ်တာကိုပြုပြင်ရန်',
        success: 'ပရိုဖိုင်းကိုအောင်မြင်စွာ update လုပ်',
      },
      createAnAccount: 'အကောင့်တစ်ခုဖန်တီးသည်',
      rememberMe: 'Remember me',
      forgotPassword: 'စကားဝှက်ကိုမေ့နေပါသလား',
      signin: 'Sign in',
      signup: 'Sign up',
      signout: 'Sign out',
      alreadyHaveAnAccount:
        'အကောင့်ရှိပြီးသားလား? Sign in.',
      signinWithAnotherAccount:
        'Sign in အခြားအကောင့်တစ်ခုနှင့်အတူ',
      emailUnverified: {
        message: `ကျေးဇူးပြုပြီးသင့်အီးမေးလ်ကိုအတည်ပြုပါ <strong>{0}</strong> to confinue.`,
        submit: `Rအီးမေးလ်အတည်ပြုပြန်လည်ပေးပို့ပါ`,
      },
      emptyPermissions: {
        message: `သင့်မှာခွင့်ပြုချက်မရှိသေးပါ။ သင့်အားအခွင့်အရေးများပေးရန် admin မှစောင့်ပါ။`,
      },
      passwordResetEmail: {
        message: 'လျှို့ဝှက်နံပါတ် reset အီးမေးလ်ပို့ပါ',
        error: `အီးမေးလ်ကိုအသိအမှတ်မပြုပါ`,
      },
      passwordReset: {
        message: 'လျှို့ဝှတ်နံပါတ်အားမူလအတိုင်းပြန်လုပ်သည်',
      },
      emailAddressVerificationEmail: {
        error: `အီးမေးလ်ကိုအသိအမှတ်မပြုပါ`,
      },
      verificationEmailSuccess: `အတည်ပြုအီးမေးလ်ကိုအောင်မြင်စွာပို့ခဲ့သည်`,
      passwordResetEmailSuccess: `စကားဝှက်ကိုပြန်လည်သတ်မှတ်သည်အီးမေးလ်ကိုအောင်မြင်စွာပို့ပြီးပါပြီ`,
      passwordResetSuccess: `စကားဝှက်ကိုအောင်မြင်စွာပြောင်းလဲပစ်လိုက်ပြီ`,
      verifyEmail: {
        success: 'အီးမေးလ်ကိုအောင်မြင်စွာအတည်ပြုပြီး',
        message:
          'ခဏတာ, သင့်အီးမေးလ်ကိုအတည်ပြုလျက်ရှိသည်...',
      },
    },
  
    roles: {
      librarian: {
        label: 'စာကြည့်တိုက်',
        description: 'အရင်းအမြစ်များအားလုံးကိုအပြည့်အဝလက်လှမ်းမီ',
      },
      member: {
        label: 'အသင်းဝင်',
        description: 'အသင်းဝင်ခွင့်',
      },
    },
  
    iam: {
      title: 'အထောက်အထားနှင့် Access ကိုစီမံခန့်ခွဲမှု',
      menu: 'အသုံးပြုသူများ',
      disable: 'ပိတ်ပါ',
      disabled: 'ပိတ်ထားသည်',
      enabled: 'ဖွင့်ထားသည်',
      enable: 'ဖွင့်ပါ',
      doEnableSuccess: '',
      doDisableSuccess: 'အသုံးပြုသူကိုအောင်မြင်စွာဖွင့်ပြီး',
      doDisableAllSuccess: 'အသုံးပြုသူ (များ) ကိုအောင်မြင်စွာပိတ်ထားသည်',
      doEnableAllSuccess: 'အသုံးပြုသူ (များ) ကိုအောင်မြင်စွာဖွင့်ထားသည်',
      doAddSuccess: 'အသုံးပြုသူ (များ) ကိုအောင်မြင်စွာသိမ်းဆည်းပြီး',
      doUpdateSuccess: 'အသုံးပြုသူ ကိုအောင်မြင်စွာသိမ်းဆည်းပြီး',
      viewBy: 'View By',
      users: {
        name: 'အသုံးပြုသူများ',
        label: 'အသုံးပြုသူများ',
        exporterFileName: 'users_export',
        doRemoveAllSelectedSuccess:
          'ခွင့်ပြုချက်များကိုအောင်မြင်စွာဖယ်ရှားလိုက်ပြီ',
      },
      roles: {
        label: 'အခန်းကဏ္။',
        doRemoveAllSelectedSuccess:
          'ခွင့်ပြုချက်များကိုအောင်မြင်စွာဖယ်ရှားလိုက်ပြီ',
      },
      edit: {
        title: 'အသုံးပြုသူကိုတည်းဖြတ်ပါ',
      },
      new: {
        title: 'အသုံးပြုသူအသစ်',
        emailsHint:
          'Separate multiple email addresses using the comma character.',
      },
      view: {
        title: 'View User',
        activity: 'လှုပ်ရှားမှု',
      },
      importer: {
        title: 'Import Users',
        fileName: 'users_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
      },
      errors: {
        userAlreadyExists:
          'ယခုအီးမေးလ်ပါသောသုံးစွဲသူရှိပြီးသားဖြစ်သည်',
        userNotFound: 'အသုံးပြုသူကိုရှာမတွေ့ပါ',
        disablingHimself: `သင်ကိုယ်တိုင်မပိတ်နိုင်ပါ`,
        revokingOwnPermission: `သင့်ရဲ့ Libarian ခွင့်ပြုချက်ကိုပြန်လည်ရုပ်သိမ်းလို့မရပါဘူး`,
      },
    },
  
    user: {
      fields: {
        id: 'Id',
        authenticationUid: 'Authentication Uid',
        avatars: 'Avatar',
        email: 'အီးမေးလ်',
        emails: 'အီးမေးလ် (များ)',
        fullName: 'နာမည်',
        firstName: 'ပထမနာမည်',
        lastName: 'နောက်ဆုံးနာမည်',
        status: 'အခြေအနေ',
        disabled: 'ပိတ်ထားသည်',
        phoneNumber: 'ဖုန်းနံပါတ်',
        role: 'အခန်းကဏ္။',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        roleUser: 'အခန်းကဏ္ / / အသုံးပြုသူ',
        roles: 'အခန်းကဏ္။',
        createdAtRange: 'Created at',
        password: 'စကားဝှက်',
        rememberMe: 'Remember me',
      },
      enabled: 'Enabled',
      disabled: 'Disabled',
      validations: {
        // eslint-disable-next-line
        email: 'Email ${value} is invalid',
      },
    },
  
    auditLog: {
      menu: 'စာရင်းစစ်မှတ်တမ်းများ',
      title: 'စာရင်းစစ်မှတ်တမ်းများ',
      exporterFileName: 'audit_log_export',
      entityNamesHint:
        'Separate multiple entities using the comma character.',
      fields: {
        id: 'Id',
        timestampRange: 'Period',
        entityName: 'Entity',
        entityNames: 'Entities',
        entityId: 'Entity ID',
        action: 'Action',
        values: 'Values',
        timestamp: 'Date',
        createdByEmail: 'User Email',
      },
    },
    settings: {
      title: 'ချိန်ညှိချက်များ',
      menu: 'ချိန်ညှိချက်များ',
      save: {
        success:
          'ချိန်ညှိချက်များကိုအောင်မြင်စွာသိမ်းဆည်းပြီး အပြောင်းအလဲများအကျိုးသက်ရောက်ရန်စာမျက်နှာသည် {0} စက္ကန့်အတွင်းပြန်ဖွင့်ပါလိမ့်မည်။',
      },
      fields: {
        theme: 'Theme',
        loanPeriodInDays:'ချေးငွေကာလ (နေ့ရက်များအတွင်း)',
      },
      colors: {
        default: 'Default',
        cyan: 'Cyan',
        'geek-blue': 'Geek Blue',
        gold: 'Gold',
        lime: 'Lime',
        magenta: 'Magenta',
        orange: 'Orange',
        'polar-green': 'Polar Green',
        purple: 'Purple',
        red: 'Red',
        volcano: 'Volcano',
        yellow: 'Yellow',
      },
    },
    home: {
      menu: 'Home',
    },
    errors: {
      backToHome: 'Back to home',
      403: `စိတ်မရှိပါနဲ့၊ ဒီစာမျက်နှာကိုသင်မရရှိနိုင်ပါ`,
      404: 'ဝမ်းနည်းပါသည်၊ သင်ကြည့်ရှုခဲ့သောစာမျက်နှာမရှိပါ',
      500: 'ဝမ်းနည်းပါသည်၊ ဆာဗာသည်အမှားတစ်ခုကိုတင်ပြနေသည်',
      forbidden: {
        message: 'Forbidden',
      },
      validation: {
        message: 'An error occurred',
      },
      defaultErrorMessage: 'Ops, an error occurred',
    },
    // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
    /* eslint-disable */
    validation: {
      mixed: {
        default: '${path} is invalid',
        required: '${path} is required',
        oneOf:
          '${path} must be one of the following values: ${values}',
        notOneOf:
          '${path} must not be one of the following values: ${values}',
        notType: ({ path, type, value, originalValue }) => {
          return `${path} must be a ${type}`;
        },
      },
      string: {
        length:
          '${path} must be exactly ${length} characters',
        min: '${path} must be at least ${min} characters',
        max: '${path} must be at most ${max} characters',
        matches:
          '${path} must match the following: "${regex}"',
        email: '${path} must be a valid email',
        url: '${path} must be a valid URL',
        trim: '${path} must be a trimmed string',
        lowercase: '${path} must be a lowercase string',
        uppercase: '${path} must be a upper case string',
        selected: '${path} must be selected',
      },
      number: {
        min:
          '${path} must be greater than or equal to ${min}',
        max: '${path} must be less than or equal to ${max}',
        lessThan: '${path} must be less than ${less}',
        moreThan: '${path} must be greater than ${more}',
        notEqual: '${path} must be not equal to ${notEqual}',
        positive: '${path} must be a positive number',
        negative: '${path} must be a negative number',
        integer: '${path} must be an integer',
        invalid: '${path} must be a number',
      },
      date: {
        min: '${path} field must be later than ${min}',
        max: '${path} field must be at earlier than ${max}',
      },
      boolean: {},
      object: {
        noUnknown:
          '${path} field cannot have keys not specified in the object shape',
      },
      array: {
        min: '${path} field must have at least ${min} items',
        max:
          '${path} field must have less than or equal to ${max} items',
      },
    },
    /* eslint-disable */
    fileUploader: {
      upload: 'Upload',
      image: 'You must upload an image',
      size: 'File is too big. Max allowed size is {0}',
      formats: `Invalid format. Must be '{0}'.`,
    },
    importer: {
      line: 'Line',
      status: 'Status',
      pending: 'Pending',
      imported: 'Imported',
      error: 'Error',
      total: `{0} imported, {1} pending and {2} with error`,
      importedMessage: `Processed {0} of {1}.`,
      noNavigateAwayMessage:
        'Do not navigate away from this page or import will be stopped.',
      completed: {
        success:
          'Import completed. All rows were successfully imported.',
        someErrors:
          'Processing completed, but some rows were unable to be imported.',
        allErrors: 'Import failed. There are no valid rows.',
      },
      form: {
        downloadTemplate: 'Download the template',
        hint:
          'Click or drag the file to this area to continue',
      },
      list: {
        discardConfirm:
          'Are you sure? Non-imported data will be lost.',
      },
      errors: {
        invalidFileEmpty: 'The file is empty',
        invalidFileExcel:
          'Only excel (.xlsx) files are allowed',
        invalidFileUpload:
          'Invalid file. Make sure you are using the last version of the template.',
        importHashRequired: 'Import hash is required',
        importHashExistent: 'Data has already been imported',
      },
    },
  
    autocomplete: {
      loading: 'Loading...',
    },
  
    imagesViewer: {
      noImage: 'No image',
    },
  };
  
  export default en;
  