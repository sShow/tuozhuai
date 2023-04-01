export default {
  name: '输入框',
  type: 'el-input',
  props: {
    'model-value': {
      type: ['string', 'number'],
      value: '',
      description: '尺寸',
    },
    type: {
      type: 'string',
      enum: ['text', 'textarea'],
      value: 'text',
      description: '类型',
    },
    maxlength: {
      type: 'string',
      value: '',
      description: '最大输入长度',
    },
  },
};
